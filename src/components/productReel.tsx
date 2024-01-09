
interface ProductReelProps {
    title:string,
    subtitle?:string,
    href?:string,
    query:string
}

const FALLBACK_LIMIT = 4;


const ProductReel = (props: ProductReelProps) => {
    const {title , subtitle , href , query} = props;
    
}