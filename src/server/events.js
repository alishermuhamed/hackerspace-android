import request from './request';

async function getEventsByStatus(status) {
  try {
    const events = await request('events', 'GET', true, { status });
    return events;
  } catch (error) {
    alert(error);
  }
}

export default { getEventsByStatus };
