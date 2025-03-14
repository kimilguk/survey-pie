import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';
import deleteSurvey from '../services/deleteSurvey';

const PAGE_SIZE = 20;

function ListPage() {
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const columns = useMemo(
    () => [
      {
        title: '번호',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '생성일',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => {
          const time = new Date(createdAt);

          return `${time.getFullYear()}-${time.getMonth() + 1
            }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <>
              {/* navigate 또는 Link 태그로 이동한 설문참여 화면에서 뒤로가기 한 후 다른 설문참여 화면으로 이동 시 리렌더링이 되지 않아서 하단에 리랜더링 버튼 코드추가 */}
              <Button
                type='primary' variant='solid'
                style={{ marginRight: '10px' }}
                onClick={(e) => {
                  navigate(`/survey/${id}/0`);
                  //window.location.reload(true); //빌드 한 상태에서는 에러
                  //window.open(`/survey/${id}/0`, '_blank', 'rel=noopener noreferrer'); //빌드 한 상태에서는 에러
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                설문참여
              </Button>
              {/* <Link to={`/survey/${id}/0`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: '#000', marginRight: '10px', padding: '7px 10px', color: '#fff' }}>
                설문참여
              </Link> */}
              <Button
                danger
                onClick={(e) => {
                  deleteSurvey(id).then(() => mutate());

                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                삭제
              </Button>
            </>
          );
        },
      },
    ],
    [mutate, navigate],
  );

  if (error) {
    return 'error';
  }

  if (!data) {
    return (<div style={{ height: '100vh', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>loading...코예브 클라우드 무료 서비스는 처음 접속시 인스턴스 자원이 깨어나는데 몇 초가 걸립니다. 잠시만 기다려 주세요^^</div>)
  }

  return (
    <MainLayout selectedKeys={['list']}>
      <CreateButtonWrapper>
        <Button onClick={() => navigate('/admin/builder')} style={{ marginRight: '10px', border: '1px solid red' }}>
          새로운 설문조사 생성
        </Button>
        <Button onClick={() => window.location.replace('/')}>
          설문참여 중 브러우저 뒤로가기로 다시 설문참여 화면으로 이동 시 기존 선택항목을 모두 리렌더링 할 필요가 있을 때 사용
        </Button>
      </CreateButtonWrapper>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/admin/builder/${record.id}`);
            },
          };
        }}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </MainLayout>
  );
}

const CreateButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;

export default ListPage;
