$(document).ready(function()
{
    $('#form-profile').submit(function()
    {
        success=true;
        if($('#name').val()==='')
        {
            $('#label-name').addClass('text-danger');
            $('#help-name').removeClass('d-none');
            success=false;
        }
        else
        {
            $('#label-name').removeClass('text-danger');
            $('#help-name').addClass('d-none');
        }
        $('#form-name').addClass('was-validated');
        if($('#email').val()==='')
        {
            $('#label-email').addClass('text-danger');
            $('#help-email').removeClass('d-none');
            success=false;
        }
        else
        {
            $('#label-email').removeClass('text-danger');
            $('#help-email').addClass('d-none');
        }
        $('#form-email').addClass('was-validated');
        return success;
    });
});

