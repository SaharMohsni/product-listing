export const fullRowItemSkeleton = (loading:boolean, active = true) => ({
    active,
    title: { rows: 1, width: '100%' },
    paragraph: false,
    loading,
  })
  export const labelSkeleton = (loading:boolean, active = true) => ({
    active,
    title: false,
    paragraph: { rows: 1, width: '20%'  },
    loading,
  })
  export const tagSkeleton = (loading:boolean, active = true) => ({
    active,
    title: false,
    paragraph: { rows: 1 },
    loading,
  })
  export const imageSkeleton = (loading:boolean, active = true ) => ({
    loading,
  active,
  paragraph: false,
  title:false
  })

  export const descriptionSkeleton = (loading:boolean, active = true) => ({
    active,
    title: false,
    paragraph: { rows: 3, width: '100%' },
    loading,
  })
  export const shapeSquareBoxSkeleton = (loading:boolean, active = true) => ({
    active,
    title: false,
    paragraph: false,
    loading,
  })
