package com.mp.dao;

import com.mp.dao.PersonaDao;
import static org.junit.Assert.assertEquals;

import javax.ejb.EJB;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.junit.InSequence;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.mp.model.Persona;
import static org.junit.Assert.assertNull;

@RunWith(Arquillian.class)
public class PersonaDaoIT {
	
	private static Integer personaId;

    @Deployment
    public static WebArchive createDeployment() {
        return ShrinkWrap
                .create(WebArchive.class, "persona-dao-test.war")
                .addClasses(PersonaDao.class, Persona.class)
                .addAsWebInfResource("test-beans.xml", "beans.xml")
                .addAsResource("test-persistence.xml", "META-INF/persistence.xml");
    }
    
    @EJB
    private PersonaDao personaService;
    
    @Test
    @InSequence(1)
    public void testAddPersona() {
        // Save a new bid.
        Persona persona = new Persona();
        persona.setNombre("DORIS");
        persona.setApellidos("HERRERA");

        personaService.create(persona);

        // Make sure it was correctly saved.
         personaId = persona.getId();

        persona = personaService.findById(personaId);
        assertEquals("DORIS", persona.getNombre());
    }
    
    @Test
    @InSequence(2)
    public void testModifyPersona() {
        // Retrieve from database
        Persona persona = personaService.findById(personaId);
        persona.setApellidos("HERRERA");
        personaService.update(persona);
        
        // Make sure it was correctly saved.
        personaId = persona.getId();
        persona = personaService.findById(personaId);
        assertEquals("DORIS", persona.getNombre());
        assertEquals("HERRERA", persona.getApellidos());
    }
    
    @Test
    @InSequence(3)
    public void testDeletePersona() {
        personaService.deleteById(personaId);
        
        Persona persona = personaService.findById(personaId);
        assertNull(persona);
    }

}
