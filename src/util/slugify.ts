import slug from 'speakingurl';

export default function slugify(value: string) {
  return slug(value, { lang: 'de', custom: { _: '-' } });
}
