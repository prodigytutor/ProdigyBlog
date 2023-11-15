import React from "react";
import { IGenFullwidthBlogTeaser } from "../services/graphql/__generated/sdk";
import { FullContainer } from "./FullContainer";
import Link from "next/link";

export const FullwidthBlogTeaser: React.FC<IGenFullwidthBlogTeaser> = ({
  featuredArticle,
}) => {
  const { author, teaserImage } = featuredArticle ?? {};
  const imageSrc = teaserImage?.src;
  const imageDominantColor = teaserImage?.dominantColor;
  const imageDescription = teaserImage?.description;

  return (
    <>
      {featuredArticle && (
        <>
          <FullContainer>
            <div className="flex flex-col md:flex-row justify-start items-center self-stretch  relative overflow-hidden gap-[34px] py-[60px]">
              <div className="flex flex-base-1 flex-col w-full md:w-1/2 justify-start items-start flex-grow relative overflow-hidden gap-2.5">
                {featuredArticle.category?.name && (
                  <div className="flex justify-start items-start ">
                    <div className="flex justify-center items-center relative overflow-hidden gap-2 px-3 py-1.5 rounded-md bg-gray-100">
                      <p className=" text-xs font-medium text-center text-slate-900">
                        {featuredArticle.category.name}
                      </p>
                    </div>
                  </div>
                )}
                <h1 className="text-5xl font-bold text-left text-slate-900">
                  {featuredArticle.teaserHeadline}
                </h1>
                {author && (
                  <div className="flex justify-start items-center overflow-hidden gap-4 py-4">
                    {author.avatar?.src && (
                      <div className="flex justify-start items-start rounded-full">
                        <div className="flex justify-center items-center w-12 h-12 relative rounded-full bg-gray-500">
                          <div className="w-12 h-12 relative overflow-hidden rounded-full">
                            <img
                              src={`${author.avatar?.src}?w=46&h=46`}
                              alt={author.avatar?.description ?? ""}
                              className="object-cover"
                              width={"46px"}
                              height={"46px"}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col justify-start items-start relative">
                      <p className=" text-base font-semibold text-center text-gray-800">
                        {author.name ?? ""}
                      </p>
                      <p className=" text-xs text-center text-gray-500">
                        {author.role ?? ""}
                      </p>
                    </div>
                  </div>
                )}
                <Link
                  href={`/blog/${featuredArticle?.slug}`}
                  className="pointer"
                >
                  <div className="flex justify-start items-start ">
                    <div className="flex justify-center items-center relative overflow-hidden gap-2 rounded-md bg-white">
                      <p className=" text-[15px] font-semibold text-center text-blue-600">
                        Read more
                        <span
                          className="screen-reader-text"
                          style={{
                            position: "absolute",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden",
                          }}
                        >
                          {" "}
                          details about this blog
                        </span>
                      </p>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" w-3.5 h-3.5 relative"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.06525 1.44024C4.10589 1.3995 4.15417 1.36717 4.20732 1.34512C4.26048 1.32306 4.31746 1.31171 4.375 1.31171C4.43255 1.31171 4.48953 1.32306 4.54268 1.34512C4.59584 1.36717 4.64411 1.3995 4.68475 1.44024L9.93475 6.69024C9.9755 6.73088 10.0078 6.77916 10.0299 6.83231C10.0519 6.88546 10.0633 6.94244 10.0633 6.99999C10.0633 7.05753 10.0519 7.11452 10.0299 7.16767C10.0078 7.22082 9.9755 7.2691 9.93475 7.30974L4.68475 12.5597C4.6026 12.6419 4.49118 12.688 4.375 12.688C4.25882 12.688 4.1474 12.6419 4.06525 12.5597C3.9831 12.4776 3.93695 12.3662 3.93695 12.25C3.93695 12.1338 3.9831 12.0224 4.06525 11.9402L9.00638 6.99999L4.06525 2.05974C4.02451 2.0191 3.99219 1.97082 3.97013 1.91767C3.94807 1.86452 3.93672 1.80754 3.93672 1.74999C3.93672 1.69244 3.94807 1.63546 3.97013 1.58231C3.99219 1.52916 4.02451 1.48088 4.06525 1.44024Z"
                          fill="#2563EB"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex-grow w-full md:w-1/2 relative overflow-hidden rounded-lg">
                <img
                  style={{ backgroundColor: `${imageDominantColor}` }}
                  loading="eager"
                  src={`${imageSrc}?w=960&h=960`}
                  srcSet={`${imageSrc}?w=1920&h=1920 1920w, ${imageSrc}?w=960&h=960 1280w, ${imageSrc}?w=640&h=640 640w, ${imageSrc}?w=320&h=320 320w`}
                  alt={imageDescription ?? ""}
                  className="object-cover"
                  width={"960px"}
                  height={"960px"}
                />
              </div>
            </div>
          </FullContainer>
        </>
      )}
    </>
  );
};
