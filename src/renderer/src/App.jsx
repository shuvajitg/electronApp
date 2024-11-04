
function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="action">
        <a target="_blank" rel="noreferrer" onClick={ipcHandle} className="bg-slate-300">
          Send IPC
        </a>
      </div>
    </>
  )
}

export default App

