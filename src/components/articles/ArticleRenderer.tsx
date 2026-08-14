import type { ArticleData } from "../../data/articles/articleTypes";

import ArticleSection from "./ArticleSection";
import MediaBlock from "./MediaBlock";

type ArticleRendererProps = {
  article: ArticleData;
};

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  return (
    <div>
      {article.blocks.map((block, index) => {
        switch (block.type) {
          case "section":
            return (
              <ArticleSection
                key={index}
                id={block.id}
                title={block.title}
                paragraphs={block.paragraphs}
                media={block.media}
                paragraphsAfterMedia={block.paragraphsAfterMedia}
                bullets={block.bullets}
              />
            );

          case "media":
            return (
              <MediaBlock
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                width={block.width}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}