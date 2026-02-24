export interface Lesson {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
  description: string;
}

export type ThemeColor = 
  | 'orange' 
  | 'green' 
  | 'blue' 
  | 'purple' 
  | 'red' 
  | 'gold' 
  | 'gray' 
  | 'teal' 
  | 'darkgreen' 
  | 'navy';

export interface AppSettings {
  darkMode: boolean;
  themeColor: ThemeColor;
  autoPlayNext: boolean;
}

