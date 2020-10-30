import React from 'react';
import { useRouter } from 'next/router';
import { getDataCollection } from 'utils';
import ReactPaginate from 'react-paginate';
import {
  Layout,
  PersonajesUniverso as PersonajesUniversoContainer,
} from 'containers';

function PersonajesUniverso({ data, pageNumber, totalPages }) {
  const router = useRouter();
  const handlePageChange = ({ selected }) => {
    console.log('hola', selected);
    if (selected === 0) {
      router.push(`/personajes`, undefined, { shallow: false });
    } else {
      router.push(`/personajes?page=${selected + 1}`, undefined, {
        shallow: false,
      });
    }
  };
  console.log({ data });
  return (
    <Layout>
      <PersonajesUniversoContainer data={data} />
      {/* <ReactPaginate pageCount={totalPages} pageRangeDisplayed={5} marginPagesDisplayed={2} initialPage={pageNumber-1} onPageChange={(o) => handlePageChange(o)}/> */}
    </Layout>
  );
}

export async function getServerSideProps({ res, query }) {
  console.log('FUNCO');
  const pageNumber = query.page ? parseInt(query.page) : 1;
  /* const params = {_start: pageNumber * 10 - 10, _limit: 10}; */
  const data = await getDataCollection('personajes', res);
  const totalEntries = await getDataCollection('personajes/count', res);
  const totalPages = Math.ceil(totalEntries / 10);
  return { props: { data, pageNumber, totalPages } };
}

export default PersonajesUniverso;
