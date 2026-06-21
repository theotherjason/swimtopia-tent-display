// Demo mode — fixture data for ?demo URL parameter.
// Uses the same S.swimmers shape as the live assembly, so display
// code paths are exercised identically.

import { S, $ } from './state.js';

export function loadDemoData() {
  const now    = Math.floor(Date.now() / 1000);
  const eta    = offset => now + offset;
  const etaFmt = offset => new Date((now + offset) * 1000)
    .toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  S.meetId     = 'demo';
  S.nirvanaId  = 'demo';
  S._heatTotalByEventNum = { '77': 2, '78': 3, '79': 1, '80': 2, '81': 2 };
  S.ageGroups  = ['9-10'];
  S.gender     = 'M';
  S.teamFilter = 'HUR';
  S.teamName   = 'Hurricane Swim Team';
  S.lineupMin  = 20;
  S.warnMin    = 30;
  S.updatedAt  = Date.now();

  $('dh-meet').textContent = 'NWSC Championship 2026  ·  DEMO';
  $('dh-sub').textContent  = '9-10 · Boys · HUR';

  S.quals = [
    { label: 'INV', gender: 'M', ageMin: 9, ageMax: 10, distance: 50,  strokeCode: 1, cutTime: 3500 },
    { label: 'INV', gender: 'M', ageMin: 9, ageMax: 10, distance: 100, strokeCode: 2, cutTime: 8200 },
    { label: 'INV', gender: 'M', ageMin: 9, ageMax: 10, distance: 50,  strokeCode: 2, cutTime: 4800 },
    { label: 'INV', gender: 'M', ageMin: 9, ageMax: 10, distance: 50,  strokeCode: 4, cutTime: 4200 },
  ];

  // Heat 2 of Event 77 (50 Back Boys 9-10) is currently in the water.
  // Heat 1 of Event 77 already finished (Jackson, Lucas in prev panel).
  S.tracker = {
    isLive: true, isComplete: false,
    currentEventNumberDigit: '77', currentHeatNumber: 2,
    currentEventDistance: 50, currentEventStrokeCode: 2,
    currentEventGender: 'M', currentEventMinAge: 9, currentEventMaxAge: 10,
  };

  // Done relays: e73=200 Medley (1st, 1:59.03), e74=200 Free Relay (2nd, 1:52.45)
  // e77 50 Back: heat 1 (Jackson, Lucas) DONE; heat 2 (Ethan, Noah) INPROGRESS
  // e80 Medley Relay eta=25min → lineup in 5min → WARNING banner on load
  S.swimmers = [
    {
      name: 'Ethan Miller', lastName: 'Miller', age: 10, gender: 'M',
      events: [
        { eventId: 'e14', name: '50 Free',  number: '14', schedIdx: 14001, status: 'done', distance: 50, strokeCode: 1,
          heatNum: 2, laneNum: 5, offTime: 3198, seedTime: 3250, place: 1, heatPlace: 1, qualifying: ['INV'], isDq: false, isScratched: false },
        { eventId: 'e21', name: '100 Back', number: '21', schedIdx: 21001, status: 'done', distance: 100, strokeCode: 2,
          heatNum: 1, laneNum: 4, offTime: 7954, seedTime: 8100, place: 3, heatPlace: 2, qualifying: ['INV'], isDq: false, isScratched: false },
        { eventId: 'e73', name: '200 Medley Relay', number: '73', schedIdx: 73001, status: 'done',
          heatNum: 2, laneNum: 3, offTime: 11903, place: 1, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 4, legStroke: 1, qualifying: [] },
        { eventId: 'e74', name: '200 Free Relay', number: '74', schedIdx: 74001, status: 'done',
          heatNum: 2, laneNum: 5, offTime: 11245, place: 2, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 4, legStroke: 1, qualifying: [] },
        { eventId: 'e77', name: '50 Back', number: '77', schedIdx: 77002, status: 'inProgress',
          heatNum: 2, laneNum: 3, seedTime: 4150, distance: 50, strokeCode: 2, qualifying: [] },
        { eventId: 'e79', name: '50 Fly', number: '79', schedIdx: 79001, status: 'upcoming',
          heatNum: 1, laneNum: 4, etaEpoch: eta(18 * 60), etaDisplay: etaFmt(18 * 60),
          seedTime: 4310, distance: 50, strokeCode: 4, qualifying: [] },
        { eventId: 'e80', name: '200 Medley Relay', number: '80', schedIdx: 80001, status: 'upcoming',
          heatNum: 2, laneNum: 3, etaEpoch: eta(25 * 60), etaDisplay: etaFmt(25 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 4, legStroke: 1 },
        { eventId: 'e81', name: '200 Free Relay', number: '81', schedIdx: 81001, status: 'upcoming',
          heatNum: 2, laneNum: 4, etaEpoch: eta(35 * 60), etaDisplay: etaFmt(35 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 4, legStroke: 1 },
      ],
    },
    {
      name: 'Noah Garcia', lastName: 'Garcia', age: 9, gender: 'M',
      events: [
        { eventId: 'e14', name: '50 Free',  number: '14', schedIdx: 14001, status: 'done', distance: 50, strokeCode: 1,
          heatNum: 2, laneNum: 3, offTime: 3412, seedTime: 3380, place: 4, heatPlace: 3, qualifying: ['INV'], isDq: false, isScratched: false },
        { eventId: 'e21', name: '100 Back', number: '21', schedIdx: 21001, status: 'done', distance: 100, strokeCode: 2,
          heatNum: 1, laneNum: 6, offTime: 8560, seedTime: 8400, place: 6, heatPlace: 4, qualifying: [], isDq: false, isScratched: false },
        { eventId: 'e73', name: '200 Medley Relay', number: '73', schedIdx: 73001, status: 'done',
          heatNum: 2, laneNum: 3, offTime: 11903, place: 1, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 1, legStroke: 2, qualifying: [] },
        { eventId: 'e74', name: '200 Free Relay', number: '74', schedIdx: 74001, status: 'done',
          heatNum: 2, laneNum: 5, offTime: 11245, place: 2, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 2, legStroke: 1, qualifying: [] },
        { eventId: 'e77', name: '50 Back', number: '77', schedIdx: 77002, status: 'inProgress',
          heatNum: 2, laneNum: 5, seedTime: 4380, distance: 50, strokeCode: 2, qualifying: [] },
        { eventId: 'e79', name: '50 Fly', number: '79', schedIdx: 79001, status: 'upcoming',
          heatNum: 1, laneNum: 5, etaEpoch: eta(18 * 60), etaDisplay: etaFmt(18 * 60),
          seedTime: 4180, distance: 50, strokeCode: 4, qualifying: [] },
        { eventId: 'e80', name: '200 Medley Relay', number: '80', schedIdx: 80001, status: 'upcoming',
          heatNum: 2, laneNum: 3, etaEpoch: eta(25 * 60), etaDisplay: etaFmt(25 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 1, legStroke: 2 },
        { eventId: 'e81', name: '200 Free Relay', number: '81', schedIdx: 81001, status: 'upcoming',
          heatNum: 2, laneNum: 4, etaEpoch: eta(35 * 60), etaDisplay: etaFmt(35 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 2, legStroke: 1 },
      ],
    },
    {
      name: 'Jackson Lee', lastName: 'Lee', age: 10, gender: 'M',
      events: [
        { eventId: 'e14', name: '50 Free',  number: '14', schedIdx: 14001, status: 'done', distance: 50, strokeCode: 1,
          heatNum: 2, laneNum: 7, offTime: 3501, seedTime: 3490, place: 5, heatPlace: 4, qualifying: [], isDq: false, isScratched: false },
        { eventId: 'e73', name: '200 Medley Relay', number: '73', schedIdx: 73001, status: 'done',
          heatNum: 2, laneNum: 3, offTime: 11903, place: 1, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 3, legStroke: 4, qualifying: [] },
        { eventId: 'e74', name: '200 Free Relay', number: '74', schedIdx: 74001, status: 'done',
          heatNum: 2, laneNum: 5, offTime: 11245, place: 2, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 3, legStroke: 1, qualifying: [] },
        { eventId: 'e77', name: '50 Back', number: '77', schedIdx: 77001, status: 'done', distance: 50, strokeCode: 2,
          heatNum: 1, laneNum: 2, offTime: 4812, seedTime: 4750, place: 8, heatPlace: 2, qualifying: [], isDq: false, isScratched: false },
        { eventId: 'e79', name: '50 Fly', number: '79', schedIdx: 79001, status: 'upcoming',
          heatNum: 1, laneNum: 6, etaEpoch: eta(18 * 60), etaDisplay: etaFmt(18 * 60),
          seedTime: 4520, distance: 50, strokeCode: 4, qualifying: [] },
        { eventId: 'e80', name: '200 Medley Relay', number: '80', schedIdx: 80001, status: 'upcoming',
          heatNum: 2, laneNum: 3, etaEpoch: eta(25 * 60), etaDisplay: etaFmt(25 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 3, legStroke: 4 },
        { eventId: 'e81', name: '200 Free Relay', number: '81', schedIdx: 81001, status: 'upcoming',
          heatNum: 2, laneNum: 4, etaEpoch: eta(35 * 60), etaDisplay: etaFmt(35 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 3, legStroke: 1 },
      ],
    },
    {
      name: 'Lucas Thompson', lastName: 'Thompson', age: 9, gender: 'M',
      events: [
        { eventId: 'e21', name: '100 Back', number: '21', schedIdx: 21001, status: 'done', distance: 100, strokeCode: 2,
          heatNum: 2, laneNum: 3, offTime: null, seedTime: 8650, place: null, heatPlace: null, qualifying: [], isDq: true, isScratched: false },
        { eventId: 'e73', name: '200 Medley Relay', number: '73', schedIdx: 73001, status: 'done',
          heatNum: 2, laneNum: 3, offTime: 11903, place: 1, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 2, legStroke: 3, qualifying: [] },
        { eventId: 'e77', name: '50 Back', number: '77', schedIdx: 77001, status: 'done', distance: 50, strokeCode: 2,
          heatNum: 1, laneNum: 6, offTime: 5104, seedTime: 5210, place: 11, heatPlace: 4, qualifying: [], isDq: false, isScratched: false },
        { eventId: 'e80', name: '200 Medley Relay', number: '80', schedIdx: 80001, status: 'upcoming',
          heatNum: 2, laneNum: 3, etaEpoch: eta(25 * 60), etaDisplay: etaFmt(25 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 2, legStroke: 3 },
      ],
    },
    {
      name: 'Mason Williams', lastName: 'Williams', age: 9, gender: 'M',
      events: [
        { eventId: 'e14', name: '50 Free', number: '14', schedIdx: 14001, status: 'done', distance: 50, strokeCode: 1,
          heatNum: 1, laneNum: 6, offTime: null, seedTime: 3620, place: null, heatPlace: null, qualifying: [], isDq: false, isScratched: true },
        { eventId: 'e79', name: '50 Fly', number: '79', schedIdx: 79001, status: 'upcoming',
          heatNum: 1, laneNum: 2, etaEpoch: eta(18 * 60), etaDisplay: etaFmt(18 * 60),
          seedTime: 4750, distance: 50, strokeCode: 4, qualifying: [] },
      ],
    },
    {
      name: 'Oliver Chen', lastName: 'Chen', age: 10, gender: 'M',
      events: [
        { eventId: 'e14', name: '50 Free',  number: '14', schedIdx: 14001, status: 'done', distance: 50, strokeCode: 1,
          heatNum: 1, laneNum: 4, offTime: 3287, seedTime: 3350, place: 2, heatPlace: 1, qualifying: ['INV'], isDq: false, isScratched: false },
        { eventId: 'e21', name: '100 Back', number: '21', schedIdx: 21001, status: 'done', distance: 100, strokeCode: 2,
          heatNum: 1, laneNum: 2, offTime: 7801, seedTime: 8000, place: 1, heatPlace: 1, qualifying: ['INV'], isDq: false, isScratched: false },
        { eventId: 'e74', name: '200 Free Relay', number: '74', schedIdx: 74001, status: 'done',
          heatNum: 2, laneNum: 5, offTime: 11245, place: 2, isDq: false, isScratched: false, isRelay: true,
          relayTeam: 'A', legPosition: 1, legStroke: 1, qualifying: [] },
        { eventId: 'e79', name: '50 Fly', number: '79', schedIdx: 79001, status: 'upcoming',
          heatNum: 1, laneNum: 3, etaEpoch: eta(18 * 60), etaDisplay: etaFmt(18 * 60),
          seedTime: 4090, distance: 50, strokeCode: 4, qualifying: [] },
        { eventId: 'e81', name: '200 Free Relay', number: '81', schedIdx: 81001, status: 'upcoming',
          heatNum: 2, laneNum: 4, etaEpoch: eta(35 * 60), etaDisplay: etaFmt(35 * 60),
          isRelay: true, relayTeam: 'A', legPosition: 1, legStroke: 1 },
      ],
    },
  ];
}

// Animation sequence (cumulative timing):
//  8s  — e77h2 done (Ethan, Noah get results); tracker → e78h1 (girls 50 Back, 3 heats)
// 18s  — tracker → e78h2
// 28s  — tracker → e78h3
// 38s  — e79h1 inProgress (our 50 Fly in the water); tracker → e79h1
// 48s  — e79h1 done (results for all 4); tracker → e80h1 (Medley Relay, 2 heats)
// 58s  — tracker → e80h2
// 68s  — e80 done (relay results); tracker → e81h1 (Free Relay, 2 heats)
// 78s  — tracker → e81h2
// 88s  — e81 done; tracker isLive=false → "All events complete"
export function startDemoAnimation() {
  const render = () => import('./render.js').then(({ renderAll }) => renderAll());

  const steps = [
    [8000, () => {
      for (const sw of S.swimmers) {
        for (const ev of sw.events) {
          if (ev.eventId !== 'e77' || ev.status !== 'inProgress') continue;
          ev.status = 'done'; ev.isDq = false; ev.isScratched = false;
          if (sw.name === 'Ethan Miller') { ev.offTime = 4089; ev.place = 2; ev.heatPlace = 1; ev.qualifying = ['INV']; }
          else if (sw.name === 'Noah Garcia') { ev.offTime = 4312; ev.place = 5; ev.heatPlace = 2; ev.qualifying = ['INV']; }
        }
      }
      S.tracker = { isLive: true, isComplete: false, currentEventNumberDigit: '78', currentHeatNumber: 1,
        currentEventDistance: 50, currentEventStrokeCode: 2, currentEventGender: 'F', currentEventMinAge: 9, currentEventMaxAge: 10 };
    }],
    [10000, () => { S.tracker = { ...S.tracker, currentHeatNumber: 2 }; }],
    [10000, () => { S.tracker = { ...S.tracker, currentHeatNumber: 3 }; }],
    [10000, () => {
      for (const sw of S.swimmers)
        for (const ev of sw.events)
          if (ev.eventId === 'e79') ev.status = 'inProgress';
      S.tracker = { isLive: true, isComplete: false, currentEventNumberDigit: '79', currentHeatNumber: 1,
        currentEventDistance: 50, currentEventStrokeCode: 4, currentEventGender: 'M', currentEventMinAge: 9, currentEventMaxAge: 10 };
    }],
    [10000, () => {
      const results = {
        'Oliver Chen':  { offTime: 4055, place: 1, heatPlace: 1, qualifying: ['INV'] },
        'Noah Garcia':  { offTime: 4189, place: 2, heatPlace: 2, qualifying: ['INV'] },
        'Ethan Miller': { offTime: 4231, place: 3, heatPlace: 3, qualifying: [] },
        'Jackson Lee':  { offTime: 4498, place: 4, heatPlace: 4, qualifying: [] },
      };
      for (const sw of S.swimmers)
        for (const ev of sw.events)
          if (ev.eventId === 'e79')
            Object.assign(ev, { status: 'done', isDq: false, isScratched: false }, results[sw.name] ?? {});
      S.tracker = { isLive: true, isComplete: false, currentEventNumberDigit: '80', currentHeatNumber: 1,
        currentEventDistance: 200, currentEventStrokeCode: 5, currentEventGender: 'M', currentEventMinAge: 9, currentEventMaxAge: 10 };
    }],
    [10000, () => { S.tracker = { ...S.tracker, currentHeatNumber: 2 }; }],
    [10000, () => {
      for (const sw of S.swimmers)
        for (const ev of sw.events)
          if (ev.eventId === 'e80')
            Object.assign(ev, { status: 'done', offTime: 16842, place: 1, isDq: false, isScratched: false });
      S.tracker = { isLive: true, isComplete: false, currentEventNumberDigit: '81', currentHeatNumber: 1,
        currentEventDistance: 200, currentEventStrokeCode: 1, currentEventGender: 'M', currentEventMinAge: 9, currentEventMaxAge: 10 };
    }],
    [10000, () => { S.tracker = { ...S.tracker, currentHeatNumber: 2 }; }],
    [10000, () => {
      for (const sw of S.swimmers)
        for (const ev of sw.events)
          if (ev.eventId === 'e81')
            Object.assign(ev, { status: 'done', offTime: 15654, place: 2, isDq: false, isScratched: false });
      S.tracker = { isLive: false, isComplete: true };
    }],
  ];

  let delay = 0;
  for (const [wait, fn] of steps) {
    delay += wait;
    setTimeout(() => { fn(); render(); }, delay);
  }
}
