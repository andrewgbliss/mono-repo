import React from 'react';
import { Backdrop } from '../components/tailwind/containers';
import { CircularProgress } from '../components/tailwind/progress';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import photos from '../lib/photos.json';
import useImageLoaded from '../hooks/useImageLoaded';
import { ScrollFadeIn as FadeIn } from '../components/tailwind/animations';

interface PhotoProps {
  src: string;
  className?: string;
  expandedClassName?: string;
  objectPosition?: string;
  caption?: string;
}

function Photo(props: PhotoProps) {
  const {
    src,
    className = '',
    expandedClassName = '',
    objectPosition = '100% 0%',
    caption = '',
  } = props;
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div
      className={`p-3 bg-white border rounded-xl shadow-2xl hover-expand cursor-pointer ${className} ${
        expanded ? `expanded-photo ${expandedClassName}` : ''
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Image
        src={src}
        width="300"
        height="200"
        objectFit="cover"
        objectPosition={objectPosition}
        className="rounded-xl"
        priority={true}
      />
      <div className="text-center">{caption}</div>
    </div>
  );
}

interface Photo {
  src: string;
  caption: string;
  objectPosition: string;
}

interface CoverProps {
  dir?: string;
  title: string;
  photos: Array<Photo>;
}

function Cover(props: CoverProps) {
  const { dir = 'left', title = '', photos = [] } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === 'right' ? '190deg' : '164deg'
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="min-h-screen flex justify-center sm:items-center">
        <div
          className={`flex flex-wrap justify-center ${
            dir === 'right' ? 'flex-row-reverse' : ''
          }`}
        >
          <div className="p-5 pt-10 sm:pt-20 sm:w-1/3">
            <h2 className="text-5xl label">{title}</h2>
            <div className="pt-10 sm:pt-20 px-10 flex justify-between">
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
            </div>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-3">
              <Photo
                src={photos[0].src}
                className="transform -rotate-6"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[0].objectPosition}
                caption={photos[0].caption}
              />
              <Photo
                src={photos[1].src}
                className="transform rotate-6 sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[1].objectPosition}
                caption={photos[1].caption}
              />
              <Photo
                src={photos[2].src}
                className="transform -rotate-6 translate-y-4"
                expandedClassName="hover:translate-x-1/2 sm:hover:translate-x-0"
                objectPosition={photos[2].objectPosition}
                caption={photos[2].caption}
              />
              <Photo
                src={photos[3].src}
                className=" transform rotate-6 translate-y-4 sm:-translate-x-6"
                expandedClassName="hover:-translate-x-1/2 sm:hover:-translate-x-0"
                objectPosition={photos[3].objectPosition}
                caption={photos[3].caption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="bg-purple-400 rounded-full w-12 h-12 mb-20" />
      </FadeIn>
    </div>
  );
}

function MediumDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="bg-purple-400 rounded-full w-8 h-8 mb-20" />
      </FadeIn>
    </div>
  );
}

function SmallDot() {
  return (
    <div className="flex justify-center">
      <FadeIn>
        <div className="bg-purple-400 rounded-full w-6 h-6 mb-20" />
      </FadeIn>
    </div>
  );
}
interface SteppingDotsProps {
  dir?: string;
}

function SteppingDots(props: SteppingDotsProps) {
  const { dir = 'left' } = props;
  return (
    <div
      className="full-screen"
      style={{
        background: `linear-gradient(${
          dir === 'right' ? '7deg' : '-18deg'
        }, #ffffff 49%, #F9A8D4 0)`,
      }}
    >
      <div className="flex justify-center">
        <div>
          <BigDot />
          <div
            className={`transform ${
              dir === 'left' ? '-translate-x-14' : 'translate-x-14'
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === 'left' ? '-translate-x-24' : 'translate-x-24'
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === 'left' ? '-translate-x-28' : 'translate-x-28'
            }`}
          >
            <MediumDot />
          </div>
          <div
            className={`transform ${
              dir === 'left' ? '-translate-x-24' : 'translate-x-24'
            }`}
          >
            <SmallDot />
          </div>
          <div
            className={`transform ${
              dir === 'left' ? '-translate-x-14' : 'translate-x-14'
            }`}
          >
            <SmallDot />
          </div>
          <BigDot />
        </div>
      </div>
    </div>
  );
}

const Memories: React.FC = () => {
  const loaded = useImageLoaded();
  return (
    <>
      <Backdrop open={!loaded}>
        <div>
          <div className="flex justify-center">
            <CircularProgress />
          </div>
          <div className="flex justify-center">Loading</div>
        </div>
      </Backdrop>
      {photos.map((row, i) => {
        const dir = i % 2 === 0 ? 'left' : 'right';
        return (
          <React.Fragment key={i}>
            <Cover dir={dir} title={row.title} photos={row.photos} />
            <SteppingDots dir={dir} />
          </React.Fragment>
        );
      })}
      <footer>
        <div className="flex justify-center items-center">
          <div className="p-5 pt-10 sm:pt-20 sm:w-1/3">
            <h2 className="text-5xl label">Happy Memories!</h2>
            <div className="pt-10 sm:pt-10 px-10 flex justify-between">
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
              <div className="heart hover-expand" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pt-10">
            <div className="flex flex-col gap-5">
              <div className="btn">
                <Link href="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32" />
      </footer>
    </>
  );
};

export default Memories;
