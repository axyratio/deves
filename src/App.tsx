import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import { ChangeLanguage } from "./component/app/ChangeLanguage/ChangeLanguage";
import { Home } from "./screens/Home";
import { MobileLayout } from "./component/app/MobileLayout/MobileLayout";

function App() {
  const [language, setLanguage] = useState('th');

  return (
    <MobileLayout >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MobileLayout>
  )
}

export default App
