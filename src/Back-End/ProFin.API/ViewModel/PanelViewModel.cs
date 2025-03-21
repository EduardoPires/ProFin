namespace ProFin.API.ViewModel;

public class PanelViewModel : GenericViewModel
{
    public string Title { get; set; }

    public string TitlePlural { get; set; }

    public int Quantity { get; set; }

    public decimal TotalValue { get; set; }

    public string MostConsumed { get; set; }
}