export type SearchParams = {
  keywords: string[],
};

export class KyounoryouriRepository {
  search = async (params: SearchParams): Promise<string[]> => {
    throw new Error();
    return params.keywords;
  };
}

export const kyounoryouriRepository = new KyounoryouriRepository();
