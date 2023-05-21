export type LanguageState = {
  language: 'en' | 'vi',
};

export type Report = {
  name: string,
  location: string,
  time: Date,
};

export type FileType = 'image' | 'video' | 'other'; 