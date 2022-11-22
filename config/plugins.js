module.exports = () => {
  return {
    ckeditor: {
      enabled: true,
      config: {
        
      }
    },
    graphql: {
      config: {
        endpoint: "/graphql",
        apolloServer: {
          introspection: true,
        },
      },
    }
  }
}