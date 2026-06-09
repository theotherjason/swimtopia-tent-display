let _ctx = null;

function _getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

export function unlockAudio() {
  try {
    const ctx = _getCtx();
    if (ctx.state === 'suspended') ctx.resume();
  } catch (_) {}
}

function _tone(ctx, freq, startTime, duration, gain = 1.0) {
  const osc  = ctx.createOscillator();
  const env  = ctx.createGain();
  osc.connect(env);
  env.connect(ctx.destination);
  osc.type = 'sine';
  osc.frequency.value = freq;
  env.gain.setValueAtTime(gain, startTime);
  env.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Two-tone attention chime for "lineup soon" warning
export function playWarning() {
  try {
    const ctx = _getCtx();
    if (ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const span = 0.18 + 0.22 + 0.22; // one repeat cycle
    for (let i = 0; i < 3; i++) {
      _tone(ctx, 880,  t + i * span,        0.18);
      _tone(ctx, 1046, t + i * span + 0.22, 0.22);
    }
  } catch (_) {}
}

// Rising three-tone chime for "lineup now / GO"
export function playLineup() {
  try {
    const ctx = _getCtx();
    if (ctx.state !== 'running') return;
    const t = ctx.currentTime;
    const span = 0.14 + 0.16 + 0.14 + 0.28; // one repeat cycle
    for (let i = 0; i < 3; i++) {
      _tone(ctx, 523, t + i * span,        0.14);
      _tone(ctx, 659, t + i * span + 0.16, 0.14);
      _tone(ctx, 784, t + i * span + 0.32, 0.28);
    }
  } catch (_) {}
}
