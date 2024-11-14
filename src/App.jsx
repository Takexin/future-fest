import { useState } from 'react';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';

export default function App(){
  const [page, setPage] = useState(1)
  const [response, setResponse] = useState({});
  const formSend = (respostas) => {
    setResponse(respostas);
  };
  if(page == 1){
    return(
      <Page1 changePage={() => setPage(2)} servicePage={() => setPage(5)}/>
    )
  }
  else if (page == 2){
    return(
      <Page2 changePage={() => setPage(3)} headerChange={() => setPage(1)} servicePage={() => setPage(5)}/>
    )
  }
  else if(page == 3){
    return(
      <Page3  onFormSend={formSend} changePage={() => setPage(4)} headerChange={() => setPage(1)} servicePage={() => setPage(5)}/>
    )
  }
  else if(page == 4){
    return(
      <Page4 respostas={response} changePage={() => setPage(1)} servicePage={() => setPage(5)}/>
    )
  }
  else if(page == 5){
    return(
      <Page5 changePage={() => setPage(1)}/>
    )
  }
}
