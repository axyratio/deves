import { useState } from "react";
import { Route, Routes } from "react-router-dom"
import { ChangeLanguage } from "./component/app/ChangeLanguage/ChangeLanguage";
import { Home } from "./screens/Home";
import { MobileLayout } from "./Layout/MobileLayout/MobileLayout";
import { AppLayout } from "./Layout/AppLayout/AppLayout";
import { TermAndCondition } from "./screens/page/TeamAndCondition";
import { AccidentReport } from "./screens/page/AccidentReport"
import { EmergencyForm } from "./screens/page/EmergencyForm";
import { ClaimTracking } from "./screens/page/ClaimTracking";

function App() {

  return (
    // router
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/accident" element={<AccidentReport />} />
        <Route path="/accident/:policyNumber/term" element={<TermAndCondition />} />
        <Route path="/accident/:policyNumber/form" element={<EmergencyForm />} />
        <Route path="/claims/:claimId" element={<ClaimTracking />} />
      </Route>

    </Routes>
  )
}

export default App
