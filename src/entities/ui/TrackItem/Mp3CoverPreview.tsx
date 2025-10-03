import jsmediatags from "jsmediatags";
import { useEffect, useState } from "react";

const readCover = (file: File) => {
  return new Promise<string | null>((resolve) => {
    new jsmediatags.Render(file).setTagsToRead(["picture"]).read({
      onSuccess: ({ tags }) => {
        const pic = tags.picture;
        if (pic) {
          const base64 = btoa(
            pic.data.reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          resolve(`data;${pic.format};base64,${base64}`);
        } else {
          resolve(null);
        }
      },
    });
  });
};

const Mp3CoverPreview = ({ file }: { file: IFile }) => {
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    readCover(file).then(setCover);
  }, [file]);

  return cover ? <img src={cover} alt={cover} /> : <div>No cover</div>;
};

export default Mp3CoverPreview;
