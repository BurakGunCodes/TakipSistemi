using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TakipSistemi.Migrations
{
    /// <inheritdoc />
    public partial class migroles3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "AspNetRoles",
                newName: "RoleName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoleName",
                table: "AspNetRoles",
                newName: "UserId");
        }
    }
}
