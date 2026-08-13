function ProductCard(){
    return(
        <div style={{border:'1px solid #ccc', padding: '16px',borderRadius:'8px'}}>
            <h3>Nom produit</h3>
            <p>prix:10</p>
            <button>Ajouter au panier</button>
        </div>
    );
}
export default ProductCard;