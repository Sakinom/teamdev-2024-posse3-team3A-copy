import Image from 'next/image';

const DisplayTree = ({ treeNumber }) => {
  const src = `/img/dashboard/tree${treeNumber}.png`;
  return (
    <Image
      src={src}
      width={400}
      height={400}
      className="m-auto"
      alt="木の画像"
    ></Image>
  );
};

export default DisplayTree;
