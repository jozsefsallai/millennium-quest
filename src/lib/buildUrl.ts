const buildUrl = (path: string = ''): string => {
  const port = process.env.NEXT_PUBLIC_PORT;
  const protocol = process.env.NEXT_PUBLIC_PROTOCOL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  const pathWithSlash = path[0] === '/' ? path : `/${path}`;

  const portWithColon = port ? `:${port}` : '';

  const baseUrl =
    typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.host}`
      : `${protocol}://${domain}${portWithColon}`;

  return `${baseUrl}${pathWithSlash}`;
};

export default buildUrl;
