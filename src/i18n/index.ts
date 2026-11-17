import type { Lang } from '../config';
import type { Dict } from './types';
import { es } from './es';
import { en } from './en';

const dicts: Record<Lang, Dict> = { es, en };

export const getDict = (lang: Lang): Dict => dicts[lang];
