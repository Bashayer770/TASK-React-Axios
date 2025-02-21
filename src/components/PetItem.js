import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { adopt } from "../API";
import { Link } from "react-router-dom";

const PetItem = ({ pet }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{pet.name}</h1>
      <img
        src={pet.image}
        alt={`${pet.name}-image`}
        className="w-[200px] rounded-md
      "
      />

      <Link to={`/pets/${pet.id}`}>
        <button className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
          View
        </button>
        <button>Adopt</button>
      </Link>
    </div>
  );
};

export default PetItem;
