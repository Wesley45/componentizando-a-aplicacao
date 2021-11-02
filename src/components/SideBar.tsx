import React from "react";

import { Button } from "./Button";

type GenreResponseProps = {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
};

type SideBarProps = {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
};

const SideBar: React.FC<SideBarProps> = ({
  genres,
  handleClickButton,
  selectedGenreId,
}) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

export { SideBar };
