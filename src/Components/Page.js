import {Routes, Route} from 'react-router-dom'

const Page = (props) => {
    const {page_data} = props
    const PageApp = props.page_app

    const page_routes = page_data.map((data) => {
      return (
        <Route
          key={data.name}
          path={data.name.toLowerCase().split(' ').join('_')}
          element={<PageApp data={data} />}
        />
      );
    });
    
    return (
      <Routes>
        {page_routes}
      </Routes>
    );
  };
  
  export default Page;
  