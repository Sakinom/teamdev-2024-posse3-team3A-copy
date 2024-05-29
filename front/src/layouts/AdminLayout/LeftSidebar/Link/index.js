import Image from 'next/image';

export const SidebarLink = ({ href, src, title, textColor }) => {
  return (
    <a href={href} className="flex flex-row items-center gap-3">
      <Image
        src={src}
        quality={100}
        width={20}
        height={20}
        alt="sidebar icon"
      />
      <p
        className={`${textColor} font-NotoSansJp leading-1.6 text-sm font-bold tracking-normal`}
      >
        {title}
      </p>
    </a>
  );
};
