const basePath = "/api/v1";

async function getMeetings() {
  const res = await axios.get(`${basePath}/meetings`);
  return res.data;
}

async function markAttendance(body) {
  const res = await axios.post(`${basePath}/attendees`, body);
  return res.data;
}
