import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ErrorTransitionPage,
  GeneratedInvoicePage,
  HomePage,
  OrderCompletedPage,
  VslDeskPage,
} from "../pages";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pedido-concluido" element={<OrderCompletedPage />} />
        <Route path="/falha-na-transacao" element={<ErrorTransitionPage />} />
        <Route path="/boleto-gerado" element={<GeneratedInvoicePage />} />
        <Route path="/vsl-desk" element={<VslDeskPage />} />
      </Routes>
    </BrowserRouter>
  );
};
