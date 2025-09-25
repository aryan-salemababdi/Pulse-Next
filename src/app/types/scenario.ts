export type ScenarioKey = 'normal' | 'campaign' | 'crisis';

export interface Scenario {
  waveData: number[];
  volume: number;
  sentiment: number;
  velocity: number;
  analysisTitle: string;
  analysisText: string;
  waveColor: string;
  waveBorderColor: string;
}
