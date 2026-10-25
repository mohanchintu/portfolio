import React, { useState } from 'react';
import { 
  ShieldCheck, ShieldAlert, AlertTriangle, Play, RefreshCw, 
  Activity, Flame, Dumbbell, Database, FileCode, CheckCircle2,
  ChevronRight, Sparkles, Binary, Sliders
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function PhishingScannerDemo() {
  const [url, setUrl] = useState('http://paypal-security-update-login.verify-portal.top/auth');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const sampleUrls = [
    { label: 'Phishing Target', url: 'http://paypal-security-update-login.verify-portal.top/auth', type: 'phishing' },
    { label: 'Legitimate Domain', url: 'https://github.com/mohanchintu', type: 'safe' },
    { label: 'Suspicious IP', url: 'http://192.168.1.15:8080/secure/bank-login.html', type: 'danger' },
  ];

  const analyzeUrl = (inputUrl) => {
    const target = inputUrl || url;
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      // Heuristic analysis logic mirroring Mohan's React regex model
      const hasIp = /^(http|https):\/\/(\d{1,3}\.){3}\d{1,3}/i.test(target);
      const suspiciousWords = /(login|verify|security|update|bank|paypal|account|claim|wallet|free)/i.test(target);
      const isHttp = target.startsWith('http://');
      const longUrl = target.length > 50;
      const countSpecial = (target.match(/[-_@?=&#]/g) || []).length;
      const suspiciousTld = /\.(top|xyz|club|work|buzz|info|cc|tk|cf)$/i.test(target.split('/')[2] || '');

      let score = 95;
      const flags = [];

      if (hasIp) {
        score -= 40;
        flags.push({ name: 'Raw IP address host detected', severity: 'high' });
      }
      if (suspiciousTld) {
        score -= 30;
        flags.push({ name: 'High-risk Top Level Domain (.top / .xyz)', severity: 'high' });
      }
      if (suspiciousWords && (hasIp || isHttp || suspiciousTld || countSpecial > 3)) {
        score -= 25;
        flags.push({ name: 'Sensitive credential keywords in unverified domain', severity: 'medium' });
      }
      if (isHttp) {
        score -= 20;
        flags.push({ name: 'Insecure plain HTTP (no SSL/TLS transport)', severity: 'medium' });
      }
      if (longUrl || countSpecial > 4) {
        score -= 15;
        flags.push({ name: 'High entropy & abnormal character density', severity: 'low' });
      }

      const finalScore = Math.max(5, Math.min(100, score));
      const status = finalScore >= 75 ? 'SAFE' : finalScore >= 45 ? 'SUSPICIOUS' : 'MALICIOUS';

      setResult({
        score: finalScore,
        status,
        flags,
        scannedAt: new Date().toLocaleTimeString(),
        domain: target.replace(/^https?:\/\//, '').split('/')[0]
      });
      setAnalyzing(false);

      if (finalScore >= 75) {
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
      }
    }, 600);
  };

  return (
    <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 text-xs font-sans text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Live URL Phishing Heuristic Engine</h4>
            <p className="text-[11px] text-slate-400">Regex Pattern Matcher & Lexical Threat Classifier</p>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded text-[10px] font-mono">
          React.js Live Scanner
        </span>
      </div>

      {/* Input bar */}
      <div className="flex gap-2 mb-2">
        <input 
          type="text" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste URL to inspect (e.g. http://...)"
          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
        />
        <button
          onClick={() => analyzeUrl()}
          disabled={analyzing}
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
        >
          {analyzing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          <span>Scan</span>
        </button>
      </div>

      {/* Preset Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <span className="text-[10px] text-slate-400">Presets:</span>
        {sampleUrls.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setUrl(preset.url);
              analyzeUrl(preset.url);
            }}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px] transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Result Display */}
      {result && (
        <div className={`p-3 rounded-xl border transition-all ${
          result.status === 'SAFE' 
            ? 'bg-emerald-950/40 border-emerald-500/40' 
            : result.status === 'SUSPICIOUS'
            ? 'bg-amber-950/40 border-amber-500/40'
            : 'bg-rose-950/40 border-rose-500/40'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {result.status === 'SAFE' ? (
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              ) : (
                <ShieldAlert className="w-5 h-5 text-rose-400" />
              )}
              <div>
                <span className="font-bold text-sm text-white tracking-wide">{result.status}</span>
                <span className="text-slate-400 text-[10px] ml-2">Host: {result.domain}</span>
              </div>
            </div>
            <div className="text-right">
              <span className={`text-base font-extrabold font-mono ${
                result.score >= 75 ? 'text-emerald-400' : result.score >= 45 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {result.score}/100
              </span>
              <p className="text-[9px] text-slate-400 uppercase">Trust Index</p>
            </div>
          </div>

          {result.flags.length > 0 ? (
            <div className="space-y-1 mt-2 pt-2 border-t border-slate-800">
              <p className="text-[10px] font-semibold text-slate-300">Triggered Heuristic Flags:</p>
              {result.flags.map((flag, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <span className={`w-1.5 h-1.5 rounded-full ${flag.severity === 'high' ? 'bg-rose-400' : 'bg-amber-400'}`} />
                  <span>{flag.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[11px] text-emerald-300 flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> No known deceptive regex patterns or spoofing tokens matched.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function MLClassificationDemo() {
  const [radius, setRadius] = useState(14.2);
  const [texture, setTexture] = useState(19.5);
  const [concavity, setConcavity] = useState(0.08);

  // Approximate SVM decision function trained on Wisconsin Breast Cancer dataset
  // Higher radius + texture + concavity correlates with malignancy
  const pca1 = ((radius - 14.1) * 0.45 + (texture - 19.3) * 0.25 + (concavity - 0.088) * 8.5);
  const pca2 = ((texture - 19.3) * 0.5 - (radius - 14.1) * 0.2);
  
  // Ensemble score probability
  const z = pca1 * 1.8 + pca2 * 0.4 - 0.2;
  const probMalignant = 1 / (1 + Math.exp(-z));
  const isMalignant = probMalignant > 0.5;

  return (
    <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 text-xs font-sans text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">PCA & SVM Cancer Classification Simulator</h4>
            <p className="text-[11px] text-slate-400">97.2% Ensemble Accuracy · Scikit-Learn Model</p>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded text-[10px] font-mono">
          Clinical Decision Support
        </span>
      </div>

      {/* Sliders */}
      <div className="space-y-2.5 mb-3">
        <div>
          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
            <span>Cell Nucleus Mean Radius:</span>
            <span className="font-mono text-emerald-400 font-bold">{radius.toFixed(1)} µm</span>
          </div>
          <input 
            type="range" min="8" max="28" step="0.2" value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
            <span>Mean Texture (Variance):</span>
            <span className="font-mono text-blue-400 font-bold">{texture.toFixed(1)}</span>
          </div>
          <input 
            type="range" min="9" max="38" step="0.5" value={texture}
            onChange={(e) => setTexture(parseFloat(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
            <span>Concavity Severity:</span>
            <span className="font-mono text-amber-400 font-bold">{concavity.toFixed(3)}</span>
          </div>
          <input 
            type="range" min="0.0" max="0.4" step="0.005" value={concavity}
            onChange={(e) => setConcavity(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
      </div>

      {/* Real-time ML Prediction Card */}
      <div className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
        isMalignant ? 'bg-rose-950/40 border-rose-500/40' : 'bg-emerald-950/40 border-emerald-500/40'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2.5 h-2.5 rounded-full ${isMalignant ? 'bg-rose-500 animate-ping' : 'bg-emerald-400'}`} />
            <h5 className="font-extrabold text-white text-sm">
              {isMalignant ? 'Malignant (Class 1)' : 'Benign (Class 0)'}
            </h5>
          </div>
          <p className="text-[10px] text-slate-400 font-mono">
            PCA1: {pca1.toFixed(2)} | PCA2: {pca2.toFixed(2)}
          </p>
        </div>

        <div className="text-right">
          <span className="text-sm font-bold font-mono text-white">
            {(isMalignant ? probMalignant * 100 : (1 - probMalignant) * 100).toFixed(1)}%
          </span>
          <p className="text-[9px] text-slate-400 uppercase">Model Confidence</p>
        </div>
      </div>
    </div>
  );
}

export function FitnessPlannerDemo() {
  const [workout, setWorkout] = useState('hiit');
  const [duration, setDuration] = useState(30);
  const [weight, setWeight] = useState(70);

  const metValues = {
    hiit: 8.5,
    strength: 5.0,
    running: 9.8,
    yoga: 3.2
  };

  const calories = Math.round((duration * (metValues[workout] * 3.5 * weight)) / 200);

  return (
    <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 text-xs font-sans text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Dumbbell className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">Fitness Intelligence & Calorie Engine</h4>
            <p className="text-[11px] text-slate-400">MERN Stack · Real-Time Biometric Metrics</p>
          </div>
        </div>
        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded text-[10px] font-mono">
          Mobile Routine
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 mb-3">
        {[
          { id: 'hiit', label: 'HIIT Cardio' },
          { id: 'strength', label: 'Strength' },
          { id: 'running', label: 'Running' },
          { id: 'yoga', label: 'Mobility' },
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setWorkout(type.id)}
            className={`py-1.5 px-2 rounded-lg text-[10px] font-medium transition-all ${
              workout === type.id 
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <span className="text-[10px] text-slate-400">Duration: {duration} mins</span>
          <input 
            type="range" min="10" max="90" step="5" value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg mt-1"
          />
        </div>
        <div>
          <span className="text-[10px] text-slate-400">User Weight: {weight} kg</span>
          <input 
            type="range" min="45" max="120" step="1" value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg mt-1"
          />
        </div>
      </div>

      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
          <div>
            <span className="text-base font-extrabold text-white font-mono">{calories} kcal</span>
            <p className="text-[10px] text-emerald-300">Estimated Energy Expenditure</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold text-emerald-400 font-mono">+{Math.round(duration * 28)} pts</span>
          <p className="text-[9px] text-slate-400">MERN XP Award</p>
        </div>
      </div>
    </div>
  );
}

export function VistexXmlPipelineDemo() {
  const [compressed, setCompressed] = useState(true);

  const rawXml = `<?xml version="1.0" encoding="utf-8"?>
<AGREEMENT_DATA>
  <HEADER>
    <AGREEMENT_ID>AGR-2025-0982</AGREEMENT_ID>
    <CUSTOMER>GLOBAL_RETAIL_CORP</CUSTOMER>
    <VALID_FROM>2025-03-01</VALID_FROM>
    <STATUS>ACTIVE_SYNCED</STATUS>
  </HEADER>
  <SETTINGS_ROWS count="340">
    <ROW id="1"><TIER>ENTERPRISE_A</TIER><REBATE>0.085</REBATE><CURR>USD</CURR></ROW>
    <ROW id="2"><TIER>ENTERPRISE_B</TIER><REBATE>0.072</REBATE><CURR>USD</CURR></ROW>
    <!-- ... 338 additional configuration rows ... -->
  </SETTINGS_ROWS>
</AGREEMENT_DATA>`;

  const compressedSnippet = `RAW_INTERNAL_TABLE [342 records]
-> SAP ABAP FUNCTION MODULE: 'Z_VISTEX_XML_COMPRESS'
-> LZ4 / DEFLATE COMPRESSION ENGINE:
0x789C636000024B105F2B484D4D2C49CD4D55D230343250323032352D3039383200140224
[Payload footprint reduced from 148.6 KB down to 36.2 KB (-75.6%)]
-> 100% CRUD CHANGE TRACKING CHECKSUM: 0x9AF4B87C (VERIFIED)`;

  return (
    <div className="bg-slate-900/90 border border-emerald-500/20 rounded-2xl p-4 text-xs font-sans text-slate-200">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">SAP ABAP Compressed XML Pipeline</h4>
            <p className="text-[11px] text-slate-400">Vistex Agreement Templates & Serialization Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setCompressed(false)}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              !compressed ? 'bg-slate-700 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Raw XML
          </button>
          <button
            onClick={() => setCompressed(true)}
            className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
              compressed ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Compressed
          </button>
        </div>
      </div>

      <pre className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl font-mono text-[10px] text-emerald-400/90 overflow-x-auto max-h-36 mb-3 leading-relaxed">
        {compressed ? compressedSnippet : rawXml}
      </pre>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
          <span className="text-[9px] text-slate-400 uppercase">Storage Reduction</span>
          <p className="text-sm font-bold text-emerald-400 font-mono">-75.6%</p>
        </div>
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
          <span className="text-[9px] text-slate-400 uppercase">Retrieval Speed</span>
          <p className="text-sm font-bold text-emerald-400 font-mono">3.4x Faster</p>
        </div>
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
          <span className="text-[9px] text-slate-400 uppercase">CRUD Integrity</span>
          <p className="text-sm font-bold text-emerald-400 font-mono">100%</p>
        </div>
      </div>
    </div>
  );
}
