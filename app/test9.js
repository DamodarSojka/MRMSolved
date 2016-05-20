export default function countNodes(root) {
    if(root){
        return 1 + countNodes(root.right) + countNodes(root.left);
    } else {
        return 0;
    }
}
