const API_BASE = "http://localhost:8888/api/integrations";

export const getFlows = () => fetch(`${API_BASE}/`).then((resp) => resp.json());
