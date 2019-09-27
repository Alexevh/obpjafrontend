

function altaTipo()
{
    var altatipo = document.getElementById('AltaTipo');
    var modtipo = document.getElementById('ModTipo');
    var altaobjeto = document.getElementById('AltaObjeto');
    var modobjeto = document.getElementById('ModObjeto');
    var listaobjeto = document.getElementById('listadoObjeto');

    listaobjeto.style.display = 'none';
    altatipo.style.display = 'block';
    modtipo.style.display = 'none';
    altaobjeto.style.display = 'none';
    modobjeto.style.display = 'none';
}

function edicionTipo()
{
    var altatipo = document.getElementById('AltaTipo');
    var modtipo = document.getElementById('ModTipo');
    var altaobjeto = document.getElementById('AltaObjeto');
    var modobjeto = document.getElementById('ModObjeto');
    var listaobjeto = document.getElementById('listadoObjeto');

    listaobjeto.style.display = 'none';
    altatipo.style.display = 'none';
    modtipo.style.display = 'block';
    altaobjeto.style.display = 'none';
    modobjeto.style.display = 'none';
}


function edicionObjeto()
{
    var altatipo = document.getElementById('AltaTipo');
    var modtipo = document.getElementById('ModTipo');
    var altaobjeto = document.getElementById('AltaObjeto');
    var modobjeto = document.getElementById('ModObjeto');
    var listaobjeto = document.getElementById('listadoObjeto');

    listaobjeto.style.display = 'none';
    altatipo.style.display = 'none';
    modtipo.style.display = 'none';
    altaobjeto.style.display = 'none';
    modobjeto.style.display = 'block';
}

function altaObjeto()
{
    var altatipo = document.getElementById('AltaTipo');
    var modtipo = document.getElementById('ModTipo');
    var altaobjeto = document.getElementById('AltaObjeto');
    var modobjeto = document.getElementById('ModObjeto');
    var listaobjeto = document.getElementById('listadoObjeto');

    listaobjeto.style.display = 'none';
    altatipo.style.display = 'none';
    modtipo.style.display = 'none';
    altaobjeto.style.display = 'block';
    modobjeto.style.display = 'none';
}

function listaObjeto()
{
    var altatipo = document.getElementById('AltaTipo');
    var modtipo = document.getElementById('ModTipo');
    var altaobjeto = document.getElementById('AltaObjeto');
    var modobjeto = document.getElementById('ModObjeto');
    var listaobjeto = document.getElementById('listadoObjeto');

    listaobjeto.style.display = 'block';
    altatipo.style.display = 'none';
    modtipo.style.display = 'none';
    altaobjeto.style.display = 'none';
    modobjeto.style.display = 'none';
}


function borrar()
{
    var result = confirm("Want to delete?");
if (result) {
    var formu = Document.getElementById('frmEliminarTipo');
    formu.submit();
}
}



