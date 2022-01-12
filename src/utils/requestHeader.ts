 
export const requestHeader = (options: object| null ): object => ({
  headers: { 
    // 'Access-Control-Allow-Origin': '*', 
    ...options,
  },
})

 