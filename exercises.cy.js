describe('AutomationTestingChallenge', function()
 {
    //baseURL:'https://www.imdb.com/'
    beforeEach(() => {

       cy.visit('/')

      })


    afterEach(() => {
          
      })

        it('Accessing Nicolas Cage profile and sorting filmography by Rating, including only Feature Film', function()
        {
            //Accessing to Nicolas Cage profile
            cy.get('#suggestion-search').type('Nicolas Cage')
            cy.get('#suggestion-search-button').click()
            cy.contains('[href="/name/nm0000115/?ref_=fn_al_nm_1"]','Nicolas Cage').click()
            cy.contains('Filmography')

            //Sorting by Rating
            cy.get('select').select('Rating »').should('have.value', '/filmosearch?sort=user_rating&explore=title_type&role=nm0000115')
            
            //Including only Feature Film
            cy.get('[data-count="127"]').click()
            cy.get('.faceter-facets').contains('Feature Film')
        })


        it('Accessing to the second item of the Top box office list and rating it', function()
        {
            //Accessing to the Menu and selecting Movies Option
            cy.get('#imdbHeader-navDrawerOpen').click()
            cy.get('[data-testid="panel-content"]').contains('Movies').click()
            
            //Selecting Top box office list
            cy.contains('Top Box Office').click()

            //Accesing to the second item of the list
            cy.contains('Barbarian').click()
            
            //Rating it
            cy.get('.sc-80d4314-0 > .sc-db8c1937-0 > .sc-db8c1937-1> [data-testid="hero-rating-bar__user-rating"]').click()
            cy.get('.ipc-starbar__rating__button').eq(4).click({force:true})
            cy.get('.ipc-rating-prompt__rating-container > .ipc-button').click()   
        })
    
       
        it('Accessing and displaying second Danny Trejo photo from Breaking Bad', function()
        {
            //Accessing to the Top 250 TV Shows section
            cy.get('#imdbHeader-navDrawerOpen').click()
            cy.get('[data-testid="panel-content"]').contains('TV Shows').click()
            cy.contains('Top 250 TV Shows').click()

            //Going to Breaking Bad images
            cy.get('.lister-list').contains('Breaking Bad').click()
            cy.get('[data-testid="hero-media__photo-link"]').click()
            cy.wait(10000)

            //Selecting second Danny Trejo's photo
            cy.get('#media_index_filters').contains('Danny Trejo').click()
            cy.get('[href="/title/tt0903747/mediaviewer/rm123229952?ref_=ttmi_mi_nm_sf_2"]').click()
        })


  })