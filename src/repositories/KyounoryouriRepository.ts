// import * as queryString from "querystring";
import axios from "axios";

export type SearchParams = {
  keywords: string[];
};

export class KyounoryouriRepository {
  search = async (params: SearchParams): Promise<string[]> => {
    const result = await axios.get("https://cors-anywhere.herokuapp.com/https://www.kyounoryouri.jp/search/recipe?0=keywords%3D%25E3%2581%258B%25E3%2581%25B6%26keywords%3D%25E3%2583%25AC%25E3%2583%25A2%25E3%2583%25B3", {
      headers: {
        "Origin": "https://www.kyounoryouri.jp"
      }
    });

    console.log("@result", result);

    return params.keywords;
  };
}

export const kyounoryouriRepository = new KyounoryouriRepository();
