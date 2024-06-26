import Header from "./components/Header";
import FormBase from "./components/FormBase";
import PostHeader from "./components/PostHeader";
import PostBody from "./components/PostBody";


function App() {
  return (
    <>
      <Header className="flex items-center p-3 shadow-md">
        <h1 className="ml-5 font-bold text-2x1">FS34BLOG</h1>
        <FormBase className="ml-5 ">
          <input type="text" className="border px-2 py-1 rounded" />
          <button className="border rounded border-black px-2 py-1 ml-2">Pesquisar</button>
        </FormBase>
      </Header>
      <PostHeader/>
      <PostBody/>
    </>
  );
}

export default App