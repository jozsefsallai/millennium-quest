import type { NextRequest } from 'next/server';

import data from '~content/enemy.json';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  let locale = req.nextUrl.searchParams.get('locale') || 'jp';

  if (!['jp', 'en'].includes(locale)) {
    locale = 'jp';
  }

  const localizedData = data.map((enemy) => {
    return {
      ...enemy,
      ParameterHolderName: enemy.ParameterHolderName[locale as 'jp' | 'en'],
    };
  });

  return new Response(JSON.stringify(localizedData));
}
