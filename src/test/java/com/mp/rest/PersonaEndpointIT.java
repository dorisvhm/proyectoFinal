/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mp.rest;

import com.mp.dao.PersonaDao;
import com.mp.model.Persona;
import com.mp.rest.PersonaEndpoint;
import com.mp.rest.RestApplication;
import com.mp.util.TestConfig;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.junit.InSequence;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import org.junit.Test;
import org.junit.runner.RunWith;


@RunWith(Arquillian.class)
public class PersonaEndpointIT {
    private static Integer personaId;

    @Deployment
    public static WebArchive createDeployment() {
        return ShrinkWrap
                .create(WebArchive.class, "proyecto-rest-test.war")
                .addClasses(PersonaEndpoint.class, RestApplication.class,
                        PersonaDao.class, Persona.class)
                .addAsWebInfResource("test-beans.xml", "beans.xml")
                .addAsWebInfResource("test-beans.xml", "beans.xml")
                .addAsResource("test-persistence.xml", "META-INF/persistence.xml");
    }
//
    @Test
    @InSequence(1)
    public void testAddBid() {
        WebTarget target = ClientBuilder.newClient()
                .target(TestConfig.TEST_BASE_URL + "/proyecto-rest-test/rest/personas");
        // Save a new persona.
        Persona persona = new Persona();

        persona.setNombre("DORIS");
        persona.setApellidos("HERRERA");

        persona = target.request("application/json").post(Entity.json(persona), Persona.class);
       // personaId = persona.getId();

        // Make sure it was correctly saved.
//        persona = target.path("{id}").resolveTemplate("id", personaId)
//                .request("application/json").get(Persona.class);
//
//        assertEquals("DORIS", persona.getNombre());
    }

    @Test
    @InSequence(2)
    public void testUpdatePersona() {
//        WebTarget target = ClientBuilder.newClient()
//                .target(TestConfig.TEST_BASE_URL + "/proyecto-rest-test/rest/personas/{id}")
//                .resolveTemplate("id", personaId);
//
//        // Update persona.
//        Persona persona = target.request("application/json").get(Persona.class);
//
//        persona.setApellidos("HERRERA");
//
//        target.request().put(Entity.json(persona));
//
//        // Make sure persona was updated.
//        persona = target.request("application/json").get(Persona.class);
//
//        assertEquals("DORIS", persona.getNombre());
//        assertEquals("HERRERA", persona.getApellidos());
    }

    @Test
    @InSequence(3)
    public void testDeleteBid() {
//        WebTarget target = ClientBuilder.newClient()
//                .target(TestConfig.TEST_BASE_URL + "/proyecto-rest-test/rest/personas/{id}")
//                .resolveTemplate("id", personaId);
//        System.out.println(personaId);
//        target.request().delete();
//        Persona persona = null;
//        try {
//            persona = target.request("application/json").get(Persona.class);
//        } catch (NotFoundException e) {
//        }
//        assertNull(persona);
    }
    
}
