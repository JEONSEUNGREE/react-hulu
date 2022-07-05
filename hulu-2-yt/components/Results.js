import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move';

function Results({ results }) {
  return (
    // 그리드 커스텀하기
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default Results;
