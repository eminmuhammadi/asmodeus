import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
  stages: [
    { target: 1, duration: '1m' },
  ],
  thresholds: {
    requests: ['count < 1'],
  },
  noConnectionReuse: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1'
};

export default function() {

  const res = http.get('http://example.com');

  sleep(1);

  const checkRes = check(res, {
    'status is 200': r => r.status === 200
  });
}