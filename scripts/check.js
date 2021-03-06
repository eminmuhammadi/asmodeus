/***
 * K6 Documentation
 * @url https://k6.io/docs/javascript-api/k6-http/batch-requests
 * @author Emin Muhammadi
 */
import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "1m",    target: 5 },
    { duration: "2m",    target: 10 },
    { duration: "1m",    target: 5 },
  ],
  thresholds: { http_req_duration: ['avg<200', 'p(95)<400'] },
  discardResponseBodies: true,
  noConnectionReuse: true,
  userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
};

export default function ()
{

  const res = http.batch([
    [
      'GET',
      'https://example.com',
      null,
      {
        name: '[Get] example.com',
        tags: {
          ctype: 'html'
        }
      },
    ],
    [
      'POST',
      'https://example.com',
      {
        email:'test@test.com',
        password:'123321'
      },
      {
        name: '[Post] example.com',
        tags: {
          ctype: 'html'
        }
      }
    ]
  ]);

  sleep(1);
  check(res[0], {
    '[Get] http(200)':   r => r.status === 200,
    '[Get*] !http(200)': r => r.status !== 200,
  });
  check(res[1], {
    '[Post] http(200)':   r => r.status === 200,
    '[Post*] !http(200)': r => r.status !== 200,
  });

}