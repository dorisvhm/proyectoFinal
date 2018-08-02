package com.mp.rest;

import com.mp.dao.PersonaDao;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.OptimisticLockException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import com.mp.model.Persona;
import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.PathParam;

/**
 *
 */
@Stateless
@Path("/personas")
@Produces("application/json")
@Consumes("application/json")
public class PersonaEndpoint {

    @Inject
    PersonaDao personasService;

    @POST
    public Response create(Persona entity) {
        personasService.create(entity);

        return Response.ok(entity).build();
    }

    @GET
    public List<Persona> listAll() {

        final List<Persona> results = personasService.listAll();
        return results;
    }

    @PUT
    public Response update(Persona entity) {
        if (entity == null) {
            return Response.status(Status.BAD_REQUEST).build();
        }

        try {
            entity = personasService.update(entity);
        } catch (OptimisticLockException e) {
            return Response.status(Response.Status.CONFLICT)
                    .entity(e.getEntity()).build();
        }

        return Response.ok(entity).build();
    }

    @GET
    @Path("/personaTexto")
    public List<Persona> listByTexto(@QueryParam("texto") String texto) {
        final List<Persona> results = personasService.listByTexto(texto);
        return results;
    }

    @GET
    @Path("/{id:[0-9][0-9]*}")
    public Response findById(@PathParam("id") final Integer id) {
        Persona item = personasService.findById(id);
        if (item == null) {
            return Response.status(Status.NOT_FOUND).build();
        }
        return Response.ok(item).build();
    }

    @PUT
    @Path("/{id:[0-9][0-9]*}")
    public Response update(@PathParam("id") Long id, final Persona item) {
        personasService.update(item);
        return Response.noContent().build();
    }

    @DELETE
    @Path("/{id:[0-9][0-9]*}")
    public Response deleteById(@PathParam("id") final Integer id) {
        personasService.deleteById(id);
        return Response.noContent().build();
    }

}
