import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TelemetryTab {
  id: string;
  label: string;
  shortLabel: string;
  items: { label: string; value: string }[];
  status: string;
}

const TELEMETRY_DATA: TelemetryTab[] = [
  {
    id: 'hardware',
    label: '01 // Embedded Hardware',
    shortLabel: 'Hardware',
    status: 'ACTIVE_BUS: I2C/SPI',
    items: [
      { label: 'Targets', value: 'ESP32 Dual-Core · Arduino Uno · STM32' },
      { label: 'Sensors', value: 'VL53L0X ToF Laser · MAX30102 Pulse Ox · HC-SR04' },
      { label: 'Buses', value: 'I2C Multiplexing (TCA9548A) · SPI · UART · GPIO' },
      { label: 'Firmware', value: 'Embedded C/C++ · FreeRTOS · Hardware Interrupts' },
    ],
  },
  {
    id: 'software',
    label: '02 // Software & Web',
    shortLabel: 'Software',
    status: 'COMPILER: TS/KOTLIN',
    items: [
      { label: 'Frontend', value: 'React 19 · TypeScript · Vite · Tailwind CSS v4' },
      { label: 'Mobile', value: 'Android Studio · Kotlin · Jetpack Compose · BLE' },
      { label: 'Services', value: 'Firebase Auth · Cloud Firestore · REST Endpoints' },
      { label: 'Motion', value: 'Framer Motion · 60 FPS GPU-Accelerated Pipelines' },
    ],
  },
  {
    id: 'systems',
    label: '03 // System Architecture',
    shortLabel: 'Systems',
    status: 'PIPELINE: MULTI-TIER',
    items: [
      { label: 'Topology', value: 'Edge Microcontroller ➔ Gateway ➔ Cloud Sync' },
      { label: 'Methods', value: 'Finite State Machines · Event-Driven Architecture' },
      { label: 'Prototypes', value: 'Smart Parking System · Medical Spirometer · Agri-Cart' },
      { label: 'Telemetry', value: 'Real-time Slot Sensor Calibration · Sub-20ms Latency' },
    ],
  },
];

export const EngineeringTelemetry: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('hardware');
  const activeTab = TELEMETRY_DATA.find((t) => t.id === activeTabId) || TELEMETRY_DATA[0];

  return (
    <div className="border border-brand-primary/30 p-4 sm:p-5 bg-brand-cream/70 backdrop-blur-sm font-mono text-xs shadow-sm">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-brand-primary/20">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="font-bold tracking-wider uppercase text-brand-primary text-[0.68rem]">
            LIVE ENGINEERING TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-2 text-[0.65rem] opacity-70 tracking-wider">
          <span className="px-1.5 py-0.5 border border-brand-primary/20 bg-brand-primary/5">
            {activeTab.status}
          </span>
          <span className="hidden sm:inline-block">60 FPS</span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex border-b border-brand-primary/20 mt-3 gap-1 overflow-x-auto pb-1 scrollbar-none">
        {TELEMETRY_DATA.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`px-2.5 py-1 text-[0.65rem] uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-[0.97] border ${
                isActive
                  ? 'border-brand-primary bg-brand-primary text-brand-cream font-bold'
                  : 'border-brand-primary/30 text-brand-primary hover:bg-brand-primary/10'
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Animated Content */}
      <div className="min-h-[140px] pt-3.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex flex-col gap-2.5"
          >
            {activeTab.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 leading-relaxed"
              >
                <span className="shrink-0 font-bold opacity-60 text-[0.68rem] tracking-wider uppercase sm:w-24">
                  {item.label}:
                </span>
                <span className="text-[0.72rem] text-brand-primary/95 break-words">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Footer Indicator */}
      <div className="mt-3 pt-2.5 border-t border-brand-primary/15 flex items-center justify-between text-[0.62rem] opacity-65">
        <span>STATUS: ALL NODES OPERATIONAL</span>
        <span className="cursor-default select-none">// CLICK TABS TO SWITCH SPECS</span>
      </div>
    </div>
  );
};

export default EngineeringTelemetry;
