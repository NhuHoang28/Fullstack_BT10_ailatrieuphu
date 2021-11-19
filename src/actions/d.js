const d = (context, name) => {
    context.commit('add', name);
}
const D = (context, name) => {
    name = name.toLowerCase();
    context.commit('add', name);
}
export { D, d }