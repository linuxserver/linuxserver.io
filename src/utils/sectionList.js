import navDocs from '../../content/docs/nav.yml';

const sectionListDocs = navDocs.map((item: Object): Object => ({
    ...item,
    directory: 'docs'
}));

export {
    sectionListDocs
};
