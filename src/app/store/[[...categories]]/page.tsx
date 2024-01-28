interface CategoryProps {
    params:{
        categories:string[],
        searchParams?: string[]
    }
}

export default function Category(props:CategoryProps) {
    // http://localhost:3000/store/juegos-de-mesa?srreferer=twitter&param2=value2 varios parametros

    // console.log({props})
    console.log({props, params:props.params})
    const {categories} = props.params;
    // console.log({categories})
    return (<><h1>Categoria dinamica: {categories}</h1></>)
    
}